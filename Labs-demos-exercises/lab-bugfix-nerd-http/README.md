# Random Harry Potter

When you `npm run dev` and go to `http://localhost:9999`, you should see a random Harry Potter character's info. For example:

```
Bellatrix Lestrange
Slytherin

    12¾", Walnut - Dragon Heartstring
```

# Bugs

- [ X] The `dev` script no longer works
- [ ] App crashes on browser refresh with `Error [ERR_STREAM_WRITE_AFTER_END]: write after end`
- [ ] After moving the `http.createServer()` callback to another file, couldn't get server to run

# For the more curious

The source for the character information is the [nerds node module](https://github.com/SkyHacks/nerds).

See if you can change the "topic" from Harry Potter to Pokemon or Star Wars.
