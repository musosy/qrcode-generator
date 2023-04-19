start:
	yarn start

build-client:
	yarn
	yarn build

build-wasm:
	(cd libs ; make build)

build:
	make build-wasm
	make build-client

pretty:
	(cd libs ; cargo fmt)
	yarn run pretty

prod:
	make build
	yarn run prod