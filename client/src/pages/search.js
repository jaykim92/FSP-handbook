import React from "react";

// import components from react-bootstrap
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from 'react-bootstrap/Button'

function Search({keyword, setKeyword}) {
  return (
    <>
      <Form inline>
        <FormControl
          type="text"
          placeholder="Search a topic"
          className="mr-sm-2"
          value={keyword}
          onChange={e => setKeyword(e.target.value)}
        />
      </Form>
      <Button variant="outline-success">
        <a href="/search" style={{ color: "green" }}>
          Search
        </a>
      </Button>
    </>
  );
}

export default Search;
