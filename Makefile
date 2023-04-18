start:
	(cd client ; yarn start)


build-client:
	(cd client ; yarn ; yarn build)

build-wasm:
	(cd libs ; make build)

build:
	make build-wasm
	make build-client

pretty:
	(cd libs ; cargo fmt)
	(cd client ; yarn run pretty)

prod:
	make build
	(cd client ; yarn run prod)