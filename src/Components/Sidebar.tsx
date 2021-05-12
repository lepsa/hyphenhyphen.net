import React from 'react';
import './Sidebar.css'
import Page from "../Data/Pages";
import { Button } from 'react-bootstrap';

type ItemProps =
  { name: string
  , link: Page
  , active: boolean
  , onClick: () => void
  }

const Item_: React.FunctionComponent<ItemProps> = (props) => {
  const className = `nav-link d-flex flex-column p-1 ${ props.active ? "active" : ""}`
  return (
    <li className="nav-item">
      <a
        href="#"
        className={className}
        onClick={() => props.onClick()}
      >
        {props.name}
      </a>
    </li>
  );
}

export type Item =
  { name : string
  , page : Page
  }

export type SidebarProps =
  { title : string
  , links : Array<Item>
  , setPage : (p:Page) => void
  }

const Sidebar: React.FunctionComponent<SidebarProps> = (props) => {
  const [activeLink, setActiveLink] = React.useState<number>(0);
  
  return (
    <div className="d-flex flex-column p-3" style={{ width: "280px" }}>
      <ul className="nav nav-pills nav-fill flex-column mb-auto">
        <Item_
          name="Menu"
          link={Page.Index}
          active={true}
          onClick={() => props.setPage(Page.Index)}
        />
        <hr/>
        { props.links.map((l, i) =>
          <Item_
            key={i}
            name={l.name}
            link={l.page}
            active={i === activeLink}
            onClick={() => { props.setPage(l.page); setActiveLink(i) } }
          />
        ) }
      </ul>
    </div>
  );
}
export default Sidebar;