import React from "react"

import { Index as Index_ } from "../Pages/Index";

export enum Page
  { Index = "Index"
  };

type SelectPageProps =
  { page : Page
  };

export const SelectPage : React.FunctionComponent<SelectPageProps> = (props) => {
  switch(props.page) {
    case Page.Index : return <Index_/>
  }
}

export default Page