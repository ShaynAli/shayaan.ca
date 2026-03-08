import flask

import logging


# region Setup logging
LOG_LEVEL = logging.DEBUG
log = logging.getLogger(__name__)
logfile_location = f'./logs/{__name__}'
# '-8s' aligns the log level name to the left and pads for a total of 8 characters
log_fmt = '%(levelname)-8s %(asctime)s %(message)s'
log_file_handler = logging.FileHandler(logfile_location, mode='a')
log_file_handler.setLevel(LOG_LEVEL)
log_console_handler = logging.StreamHandler()
log_console_handler.setLevel(LOG_LEVEL)
logging.basicConfig(
    level=LOG_LEVEL,
    format=log_fmt,
    handlers=[log_file_handler, log_console_handler],
)
# endregion

site_app = flask.Flask(__name__)
site_app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # A maximum payload size of 16 MB


# Served at /api/
@site_app.route('/')
def root():
    return 'Good morning! And in case I don\'t see ya, good afternoon, good evening, and good night.', 200


@site_app.route('/health')
def health_check():
    return 'Healthy', 200
