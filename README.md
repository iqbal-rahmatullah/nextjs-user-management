# Project Setup & Installation

## Prerequisites

Before starting, make sure you have installed:

- **Node.js** (latest LTS version recommended)
- **npm** or **yarn** (depending on your preference)
- **PostgreSQL** (if using a local database)

## Installation

1.  Clone this repository:

    ```sh
    git clone https://github.com/iqbal-rahmatullah/nextjs-user-management
    cd <project-folder>

    ```

2.  Install dependencies:

    ```sh
    npm install

    ```

    or if using yarn:

    ```sh
    yarn install

    ```

## Environment Variables

Create a `.env` file in the project root and add the required configurations, for example:

```env
DATABASE_URL=postgres://user:password@localhost:5432/dbname

```

Make sure to adjust this according to your database setup.

## Set Up Database, Migration, & Seeder

```
npx drizzle-kit generate
npx drizzle-kit push
npm run seed
```

## Running the Project

To run the project in development mode:

```sh
npm run dev

```

To build the project:

```sh
npm run build

```

To run the project after building:

```sh
npm run start

```

## Linting

To check and fix linting issues:

```sh
npm run lint

```

## UI Components

This project uses **ShadCN** for UI components. Add new components with:

```sh
npm run shadcn:add <name-component>

```

## Additional Notes

- Ensure PostgreSQL is running before applying database migrations.
- Use **dotenv** to manage environment variables.
- If using TypeScript, run `tsx` to execute TS files directly.
