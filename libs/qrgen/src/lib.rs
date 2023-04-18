use wasm_bindgen::prelude::*;

#[wasm_bindgen]
extern {
    fn alert(s: &str);
}

#[wasm_bindgen]
pub fn hello(s: &str) {
    alert(&format!("Hello, {s}"));
}
