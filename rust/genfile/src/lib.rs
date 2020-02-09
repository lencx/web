use std::fs;
use std::fs::{File, OpenOptions};
use std::io;
use std::io::prelude::*;
use std::path::Path;

pub fn cat(path: &Path) -> io::Result<String> {
    let mut f = File::open(path)?;
    let mut s = String::new();
    match f.read_to_string(&mut s) {
        Ok(_) => Ok(s),
        Err(e) => Err(e),
    }
}

pub fn echo(s: &str, path: &str) -> io::Result<()> {
    let mut f = File::create(&Path::new(path))?;
    f.write_all(s.as_bytes())
}

pub fn touch(path: &Path) -> io::Result<()> {
    match OpenOptions::new().create(true).write(true).open(path) {
        Ok(_) => Ok(()),
        Err(e) => Err(e),
    }
}

pub fn path_exists(path: &str) -> bool {
    fs::metadata(path).is_ok()
}

pub fn new_post(post: &str, post_path: &str, file_path: &str) {
    match fs::create_dir_all(post_path) {
        Ok(_) => {}
        Err(err) => println!("! {:?}", err.kind()),
    }
    if !path_exists(file_path) {
        echo(post, file_path).unwrap_or_else(|err| println!("! {:?}", err.kind()));
    }
}
