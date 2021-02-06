import Head from "next/head";
import Tree from "../components/Tree";
import Editor from "../components/Editor";
import Pane from "../components/Pane";
import React from "react";

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://api.github.com/repos/puigandrew1/andrewpuig.dev/contents/package.json"
  );
  const json = await res.json();
  return { content: json.content };
};

export default function Home({ content }) {

  React.useEffect(() => {
    // console.log(window.atob(content));
  });

  return (
    <div>
      <Head>
        <title>andrewpuig.dev</title>
      </Head>

      <main>
        <Editor>
          <Tree></Tree>
          <Pane width="50%">
            {content}
          </Pane>
          <Pane width="50%">Pane 2</Pane>
        </Editor>
      </main>
    </div>
  );
}
