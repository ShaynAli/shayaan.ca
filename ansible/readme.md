# ansible readme

The site_server role allows a server to serve the website's frontend and backend.

SSH keys for remote machines are kept on the control server, which also has a ssh config mapping each key to its host.

Initial setup:

```
ansible-playbook -i hosts playbooks/update.yml -e 'force_nginx_override=true use_ssl=true'
```

Update:

```
ansible-playbook -i hosts playbooks/update.yml -e 'force_nginx_override=true use_ssl=true'
```

After initial setup, to use SSL, certbot must be installed manually. [Check](https://certbot.eff.org/) for the latest instructions. As of today, in March 2026, renewal is automatic.

Once certbot is setup, the following command will enable SSL:

```
ansible-playbook -i hosts playbooks/update.yml -e 'force_nginx_override=true use_ssl=true'
```
