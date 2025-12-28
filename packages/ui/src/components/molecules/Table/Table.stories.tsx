import type { Meta, StoryObj } from "@storybook/react";
import { Table } from "./Table";

const meta: Meta<typeof Table> = {
  title: "Molecules/Table",
  component: Table,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof Table>;

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

const sampleData: User[] = [
  { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", role: "User" },
  { id: 3, name: "Bob Johnson", email: "bob@example.com", role: "User" },
];

export const Default: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Role", accessor: "role" },
        ]}
        data={sampleData}
      />
    </div>
  ),
};

export const WithCaption: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Role", accessor: "role" },
        ]}
        data={sampleData}
        caption="User Management"
      />
    </div>
  ),
};

export const WithCustomCells: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table
        columns={[
          { header: "Name", accessor: "name" },
          {
            header: "Email",
            cell: (row) => (
              <a
                href={`mailto:${(row as User).email}`}
                className="text-primary hover:underline"
              >
                {(row as User).email}
              </a>
            ),
          },
          {
            header: "Role",
            cell: (row) => (
              <span
                className={`px-2 py-1 rounded text-xs ${
                  (row as User).role === "Admin"
                    ? "bg-primary/10 text-primary"
                    : "bg-muted"
                }`}
              >
                {(row as User).role}
              </span>
            ),
          },
        ]}
        data={sampleData}
      />
    </div>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <div className="w-full max-w-4xl">
      <Table
        columns={[
          { header: "Name", accessor: "name" },
          { header: "Email", accessor: "email" },
          { header: "Role", accessor: "role" },
        ]}
        data={sampleData}
        footer={`Total: ${sampleData.length} users`}
      />
    </div>
  ),
};
