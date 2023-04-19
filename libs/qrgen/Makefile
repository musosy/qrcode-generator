build:
	# build the wasm package
	wasm-pack build --target web --release
	# link it in the client
	(cd ../../client ; yarn add ./libs/qrgen/pkg)

test:
	cargo test -- --nocapture