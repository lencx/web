use genfile::new_post;

fn post(a: &str, b: &str) -> String {
    format!(
        "---
title: {0}
date:
type:
category:
spoiler: {1}
tags:
# readtime:
---
",
        a, b
    )
}

// https://github.com/clap-rs/clap

fn main() {
    let post_path: &str = "./content/rust_post_new";
    let file_path: &str = &(post_path.to_owned() + "/index.md");
    new_post(&post("test", "test desc"), post_path, file_path);
}
