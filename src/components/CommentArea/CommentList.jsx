import React, { Component } from "react";
import { ListGroup, Badge } from "react-bootstrap";
import DeleteComment from "./DeleteComment";

class CommentList1 extends Component {
  render() {
    return (
      <div>
        {/*         <Button onClick={this.onClickButton}>Click Me</Button>
         */}{" "}
        <ListGroup
          className="d-flex mb-3"
          style={{
            borderRadius: "0.6rem",
          }}
        >
          {this.props.commentsToShow.map((c, i) => (
            <ListGroup.Item
              style={{
                border: "3px solid rgb(245 33 33)",
                borderRadius: "0.6rem",
                backgroundColor: "#1d1f22",
                color: "white",
              }}
              key={i}
            >
              {c.comment}
              <Badge pill variant="warning" className=" ml-5">
                {c.rate}
              </Badge>

              <DeleteComment comment={c} />
            </ListGroup.Item>
          ))}
        </ListGroup>
        ;
      </div>
    );
  }
}

export default CommentList1;
