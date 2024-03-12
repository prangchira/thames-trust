import { NavbarSidebarLayout } from 'src/layouts';

export function Dashboard() {
  return (
    <>
      <NavbarSidebarLayout>
        <div className="mb-6 flex flex-wrap items-center justify-between">
          <h2 className="ml-3 text-lg font-semibold dark:text-gray-400">Dashboard</h2>
        </div>
      </NavbarSidebarLayout>
    </>
  );
}
