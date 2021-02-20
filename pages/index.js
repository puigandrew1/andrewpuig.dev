import Head from "next/head";
import GlobalStyle from "styles/globalStyles";

export default function Home() {
  const [theme, setTheme] = useState("dark");

  return (
    <div>
      <GlobalStyle />

      <Head>
        <title>andrewpuig.dev</title>
      </Head>

      <main>
        <ThemeProvider theme={themes[theme]}></ThemeProvider>
      </main>
    </div>
  );
}
