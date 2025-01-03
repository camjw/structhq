NODE_RUNNER=pnpm


.PHONY: install
install: version
	$(NODE_RUNNER) install

.PHONY: run
run:
	$(NODE_RUNNER) run dev

.PHONY: build
build:
	$(NODE_RUNNER) run build

.PHONY: version
version:
	git rev-parse HEAD > .version


