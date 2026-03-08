import multiprocessing

# Configuration
PORT = 5000
WORKERS_PER_CORE = 2

# Gunicorn settings
bind = f'127.0.0.1:{PORT}'  # Port should match app_server_port set in ansible group_vars
workers = multiprocessing.cpu_count() * WORKERS_PER_CORE
