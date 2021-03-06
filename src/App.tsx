import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Sidebar, Item } from "./Components/Sidebar";
import { Page, SelectPage } from './Data/Pages';
import { Col, Container, Row } from 'react-bootstrap';

const links : Array<Item> =
  [ { name : "Foo", page : Page.Index }
  , { name : "Bar", page : Page.Index }
  ]

export const App : React.FunctionComponent = () => {
  const [page, setPage] = React.useState<Page>(Page.Index);
  return (
    <Container>
      <Row>
        <Col>
          <Sidebar setPage={setPage} title="Menu" links={links} />
        </Col>
        <Col>
          <main>
            <SelectPage page={page}/>
          </main>
        </Col>
      </Row>
    </Container>
  );
}

export default App;