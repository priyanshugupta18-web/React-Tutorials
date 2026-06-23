const fs = require("node:fs");
const path = require("node:path");
const { spawnSync } = require("node:child_process");

const rootDir = path.resolve(__dirname, "..");
const outputDir = path.join(rootDir, "dist");
const npmCommand = "npm";

const projects = [
  {
    name: "Background Color Changer",
    folder: "bgColorChanger",
    route: "bg-color-changer",
    type: "vite",
  },
  {
    name: "Counter",
    folder: "Counter",
    route: "counter",
    type: "vite",
  },
  {
    name: "Currency Convertor",
    folder: "currencyConvertor",
    route: "currency",
    type: "vite",
  },
  {
    name: "Password Generator",
    folder: "passwordGenerator",
    route: "password",
    type: "vite",
  },
  {
    name: "React Vite",
    folder: "react@vite",
    route: "react-vite",
    type: "vite",
  },
  {
    name: "React At Default",
    folder: "reactatdefault",
    route: "react-at-default",
    type: "cra",
  },
  {
    name: "Tailwind Project",
    folder: "Tailwind-Project",
    route: "tailwind-project",
    type: "vite",
  },
  {
    name: "Theme Switcher",
    folder: "themeSwitcher",
    route: "theme-switcher",
    type: "vite",
  },
  {
    name: "Todos",
    folder: "Todos",
    route: "todos",
    type: "vite",
  },
  {
    name: "Unreact",
    folder: "Unreact",
    route: "unreact",
    type: "static",
  },
];

function run(command, args, cwd, env = {}) {
  const commandArgs =
    process.platform === "win32"
      ? ["cmd.exe", ["/d", "/s", "/c", [command, ...args].join(" ")]]
      : [command, args];

  const result = spawnSync(commandArgs[0], commandArgs[1], {
    cwd,
    env: { ...process.env, ...env },
    shell: false,
    stdio: "inherit",
  });

  if (result.error || result.status !== 0) {
    const prettyCommand = [command, ...args].join(" ");
    if (result.error) {
      throw new Error(`Command failed: ${prettyCommand}\n${result.error.message}`);
    }
    throw new Error(`Command failed: ${prettyCommand}`);
  }
}

function ensureDependencies(projectDir) {
  if (fs.existsSync(path.join(projectDir, "node_modules"))) {
    return;
  }

  const installCommand = fs.existsSync(path.join(projectDir, "package-lock.json"))
    ? "ci"
    : "install";

  run(npmCommand, [installCommand], projectDir);
}

function copyDirectory(from, to) {
  fs.rmSync(to, { force: true, recursive: true });
  fs.mkdirSync(path.dirname(to), { recursive: true });
  fs.cpSync(from, to, { recursive: true });
}

function buildViteProject(project) {
  const projectDir = path.join(rootDir, project.folder);

  ensureDependencies(projectDir);
  run(
    npmCommand,
    ["run", "build", "--", "--base", `/${project.route}/`],
    projectDir
  );

  copyDirectory(path.join(projectDir, "dist"), path.join(outputDir, project.route));
}

function buildCreateReactAppProject(project) {
  const projectDir = path.join(rootDir, project.folder);

  ensureDependencies(projectDir);
  run(npmCommand, ["run", "build"], projectDir, {
    PUBLIC_URL: `/${project.route}/`,
  });

  copyDirectory(path.join(projectDir, "build"), path.join(outputDir, project.route));
}

function copyStaticProject(project) {
  copyDirectory(path.join(rootDir, project.folder), path.join(outputDir, project.route));
}

function createIndexPage() {
  const links = projects
    .map(
      (project) => `
        <a class="project-link" href="/${project.route}/">
          <span>${project.name}</span>
          <small>/${project.route}/</small>
        </a>`
    )
    .join("");

  const html = `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>React Tutorials</title>
    <style>
      :root {
        color-scheme: light dark;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background: #f7f7f4;
        color: #171717;
      }

      * {
        box-sizing: border-box;
      }

      body {
        margin: 0;
        min-height: 100vh;
      }

      main {
        width: min(960px, calc(100% - 32px));
        margin: 0 auto;
        padding: 56px 0;
      }

      h1 {
        margin: 0 0 8px;
        font-size: clamp(2rem, 6vw, 4rem);
        line-height: 1;
      }

      p {
        margin: 0 0 32px;
        max-width: 58ch;
        color: #555;
        font-size: 1.05rem;
      }

      .project-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
        gap: 12px;
      }

      .project-link {
        display: grid;
        gap: 8px;
        min-height: 92px;
        padding: 18px;
        border: 1px solid #d9d8d1;
        border-radius: 8px;
        color: inherit;
        text-decoration: none;
        background: #fff;
      }

      .project-link:hover {
        border-color: #111;
      }

      .project-link span {
        font-weight: 700;
      }

      .project-link small {
        color: #666;
      }

      @media (prefers-color-scheme: dark) {
        :root {
          background: #111;
          color: #f2f2f2;
        }

        p,
        .project-link small {
          color: #aaa;
        }

        .project-link {
          border-color: #333;
          background: #1b1b1b;
        }

        .project-link:hover {
          border-color: #eee;
        }
      }
    </style>
  </head>
  <body>
    <main>
      <h1>React Tutorials</h1>
      <p>Choose a project. Each folder is built separately and published under its own route.</p>
      <div class="project-grid">${links}
      </div>
    </main>
  </body>
</html>
`;

  fs.writeFileSync(path.join(outputDir, "index.html"), html);
}

fs.rmSync(outputDir, { force: true, recursive: true });
fs.mkdirSync(outputDir, { recursive: true });

for (const project of projects) {
  console.log(`\n==> ${project.name}`);

  if (project.type === "vite") {
    buildViteProject(project);
  } else if (project.type === "cra") {
    buildCreateReactAppProject(project);
  } else {
    copyStaticProject(project);
  }
}

createIndexPage();
console.log("\nBuild finished. Output is in dist/.");
