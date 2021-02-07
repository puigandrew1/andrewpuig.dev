import Head from "next/head";
import GlobalStyle from "styles/globalStyles";
import Tree from "components/Tree";
import Editor from "components/TextEditor";
import Pane from "components/Pane";
import Window from "components/Window";
import Toolbar from "components/Toolbar";
import Button from "components/Button";
import { decode } from "js-base64";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import themes from "styles/themes";
import SettingsBrightnessIcon from "@material-ui/icons/SettingsBrightness";
import SearchIcon from "@material-ui/icons/Search";
import GitHubIcon from "@material-ui/icons/GitHub";

export default function Home({ content }) {
  const [theme, setTheme] = useState("dark");
  return (
    <div>
      <GlobalStyle />

      <Head>
        <title>andrewpuig.dev</title>
      </Head>

      <main>
        <ThemeProvider theme={themes[theme]}>
          <Window>
            <Toolbar>
              <Button block
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              >
                <SettingsBrightnessIcon />
              </Button>
              <Button block>
                <SearchIcon />
              </Button>
              <Button block>
                <GitHubIcon />
              </Button>
            </Toolbar>
            <Tree></Tree>
            <Editor>
              <Pane>{decode(content)}</Pane>
              <Pane>Pane 2</Pane>
            </Editor>
          </Window>
        </ThemeProvider>
      </main>
    </div>
  );
}

Home.getInitialProps = async (ctx) => {
  const res = await fetch(
    "https://api.github.com/repos/puigandrew1/andrewpuig.dev/contents/package.json"
  );
  const json = await res.json();
  return { content: json.content };
};
