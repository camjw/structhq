NODE_RUNNER=pnpm

.PHONY: install
install:
	$(NODE_RUNNER) install

.PHONY: run
run:
	$(NODE_RUNNER) run dev

.PHONY: build
build:
	$(NODE_RUNNER) run build

.PHONY: lint
lint:
	$(NODE_RUNNER) run lint --max-warnings 0
	
.PHONY: typecheck
typecheck:
	$(NODE_RUNNER) run typecheck

.PHONY: check
check: lint typecheck

.PHONY: test
test:
	$(NODE_RUNNER) run test

.PHONY: makemigrations
makemigrations:
	$(NODE_RUNNER) run migrations:generate

.PHONY: migrate
migrate:
	$(NODE_RUNNER) run migrations:run

.PHONY: studio
studio:
	$(NODE_RUNNER) run studio

.PHONY: icons
icons:
	bun icons/build.ts
