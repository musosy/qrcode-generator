start:
	yarn start

build-client:
	rm -rf build
	yarn
	yarn build

build-wasm:
	(cd libs ; $(MAKE) build)

build:
	$(MAKE) build-wasm
	$(MAKE) build-client

pretty:
	(cd libs ; cargo fmt)
	yarn run pretty

prod:
	$(MAKE) build
	yarn run prod