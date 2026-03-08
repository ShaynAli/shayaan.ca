server {
    server_name {{ nginx_site }};
    root {{ static_content_root }};

    # Vite's static assets should be served with extreme caching.
    location /assets/ {
        try_files $uri =404;
        access_log off;
        add_header Cache-Control "public, max-age=31536000, immutable";
    }

    # ACME and other well-known paths should not be rewritten.
    location ^~ /.well-known/ {
        try_files $uri =404;
    }

    # API stays proxied (no SPA fallback).
    location /api/ {
        proxy_pass http://127.0.0.1:{{ app_server_port }}/;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }

    # SPA fallback: serve index.html for anything not found.
    location / {
        try_files $uri $uri/ /index.html;
    }

    listen 443 ssl; # managed by Certbot
    ssl_certificate /etc/letsencrypt/live/{{ nginx_site }}/fullchain.pem; # managed by Certbot
    ssl_certificate_key /etc/letsencrypt/live/{{ nginx_site }}/privkey.pem; # managed by Certbot
    include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
    ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}
server {
    if ($host = {{ nginx_site }}) {
        return 301 https://$host$request_uri;
    } # managed by Certbot

    listen      80;
    server_name  {{ nginx_site }};
    return 404; # managed by Certbot
}
