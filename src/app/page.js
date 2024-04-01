import { Button, Grid } from "@mui/material";
import Link from "next/link";
import "./page.css";
import { FaSquareGithub } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="main-container">
      <h1 className="title">
        Custom Input Fields With Next JS based on API Data
      </h1>
      <Grid display="flex" flexDirection="row" sx={{ gap: 1 }}>
        <Link href="/custom-input">
          <Button
            variant="contained"
            size="medium"
            className="get-start-btn"
            disableElevation
          >
            custom input
          </Button>
        </Link>
        <Link href="/country-data">
          <Button
            variant="contained"
            size="medium"
            className="get-start-btn"
            disableElevation
          >
            country data
          </Button>
        </Link>
      </Grid>
      <Grid className="footer-content">
        <span>
          source code in <FaSquareGithub className="social-icon" />
          <Link
            href="https://github.com/Krishna-Potter/ui-task"
            target="_blank"
          >
            Krishna-Potter
          </Link>
        </span>
      </Grid>
    </div>
  );
}
