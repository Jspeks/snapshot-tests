import React from 'react'
import Card from "react-bootstrap/Card"

function GitHubCard() {
  return (
    <div className="card">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://avatars.githubusercontent.com/u/103010248?v=4" />
        <Card.Body>
          <Card.Title>Jspeks</Card.Title>
          <Card.Text>
            It's me, ya boi
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}

export default GitHubCard;