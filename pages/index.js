import Head from "next/head";
import GlobalStyle from "styles/globalStyles";
import Tree from "components/Tree";
import { TreeItem, TreeItemText, TreeItemIcon } from "components/TreeItem";
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
import FolderIcon from "@material-ui/icons/Folder";
import FileCopyIcon from "@material-ui/icons/FileCopy";
import { getRepo, getRepoContents, getFile } from "lib/api";

export default function Home({ repo, repoContents, file }) {
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
            {/* Toolbar */}
            <Toolbar>
              <Button
                block
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

            {/* Tree */}
            <Tree>
              {typeof repoContents === "object" &&
                repoContents.map((item, i) => {
                  return (
                    <TreeItem key={`item-${i}`}>
                      <TreeItemIcon>
                        {item.type === "file" ? (
                          <FileCopyIcon style={{ fontSize: 18 }} />
                        ) : (
                          <FolderIcon style={{ fontSize: 18 }} />
                        )}{" "}
                      </TreeItemIcon>
                      <TreeItemText>{item.name}</TreeItemText>
                    </TreeItem>
                  );
                })}
            </Tree>

            {/* Editor */}
            <Editor>
              <Pane>{decode(file.content)}</Pane>
              <Pane>Pane 2</Pane>
            </Editor>
          </Window>
        </ThemeProvider>
      </main>
    </div>
  );
}

export async function getStaticProps() {
  const repo = await getRepo();
  const repoContents = await getRepoContents();
  const file = await getFile("pages/index.js");

  return {
    props: { repo, repoContents, file },
  };
}
