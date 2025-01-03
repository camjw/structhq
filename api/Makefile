UV=uv
PYTHON=python
MANAGE=$(UV) run $(PYTHON) manage.py
REDIS=$(UV) run ./scripts/redisutil

.PHONY: deps
deps:
	$(UV) sync

.PHONY: checkdb
checkdb:
	./scripts/dbutil create

.PHONY: dropdb
dropdb:
	./scripts/dbutil drop

.PHONY: seeddb
seeddb:
	$(MANAGE) loaddata seed.json

.PHONY: cleandb
cleandb: dropdb checkdb makemigrations migrate

.PHONY: install
install: deps checkdb makemigrations migrate

.PHONY: lint
lint:
	$(UV) run ruff format .
	$(UV) run ruff check . --fix

.PHONY: test
test:
	TEST=true $(MANAGE) test $(ARGS) --keepdb --parallel --exclude-tag=evals

.PHONY: server
server:
	$(UV) run python manage.py runserver

.PHONY: server_prod
server_prod:
	$(UV) run gunicorn --bind 0.0.0.0:8000 config.wsgi

.PHONY: redis
redis:
	$(REDIS) start

.PHONY: run
run: redis server

.PHONY: makemigrations
makemigrations:
	$(MANAGE) makemigrations

.PHONY: migrate
migrate:
	$(MANAGE) migrate

.PHONY: blankmigration
blankmigration:
	$(MANAGE) makemigrations structhq --empty

.PHONY: mergemigration
mergemigration:
	$(MANAGE) makemigrations --merge

.PHONY: showmigrations
showmigrations:
	$(MANAGE) showmigrations

.PHONY: console
console:
	$(MANAGE) shell_plus --ipython

.PHONY: routes
routes:
	$(MANAGE) show_urls

.PHONY: version
version:
	./scripts/version

.PHONY: collectstatic
collectstatic:
	$(MANAGE) collectstatic

.PHONY: check
check:
	$(UV) run ruff check .

.PHONY: celery_worker
celery_worker:
	$(UV) run celery -A config worker -l INFO --pool=prefork

.PHONY: celery_worker_solo
celery_worker_solo:
	$(UV) run watchmedo auto-restart --directory="./" --pattern="*.py" --recursive -- celery --app=config worker --loglevel=INFO --pool=solo

.PHONY: openapi
openapi:
	$(MANAGE) spectacular --color --file ../docs/api-reference/openapi.yaml
