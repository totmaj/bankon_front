import SidebarItem from "./SidebarItem";

const sidebarItems = [
  {
    title: "Wallet",
    href: "/wallet",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          stroke="var(--light-gray-color)"
          d="M14.25 4h-4.5C6.568 4 4.977 4 3.989 5.004S3 7.624 3 10.857v2.286c0 3.232 0 4.849.989 5.853C4.977 20 6.568 20 9.75 20h4.5c3.182 0 4.773 0 5.762-1.004s.988-2.62.988-5.853v-2.286c0-3.232 0-4.849-.988-5.853C19.023 4 17.432 4 14.25 4Z"
        ></path>
        <path
          stroke="var(--light-gray-color)"
          strokeLinecap="round"
          d="M7 8h3"
        ></path>
        <path
          stroke="var(--light-gray-color)"
          d="M19 16h-2c-.943 0-1.414 0-1.707-.293S15 14.943 15 14s0-1.414.293-1.707S16.057 12 17 12h2c.943 0 1.414 0 1.707.293S21 13.057 21 14s0 1.414-.293 1.707S19.943 16 19 16Z"
        ></path>
      </svg>
    ),
  },
  {
    title: "Monitoring",
    href: "/monitoring",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="23"
        height="23"
        fill="none"
        viewBox="0 0 24 24"
      >
        <path
          fill="var(--light-gray-color)"
          fillRule="evenodd"
          d="M12 3.538c-2.182 0-5.168.2-7.017.342a1.22 1.22 0 0 0-1.128 1.107c-.14 1.534-.317 3.798-.317 5.474 0 1.678.177 3.94.317 5.475a1.22 1.22 0 0 0 1.128 1.107c1.85.142 4.835.342 7.017.342s5.168-.2 7.017-.342a1.22 1.22 0 0 0 1.128-1.107c.14-1.534.317-3.797.317-5.475 0-1.676-.177-3.94-.317-5.474a1.22 1.22 0 0 0-1.128-1.107c-1.85-.142-4.835-.342-7.017-.342M4.866 2.346C6.715 2.204 9.753 2 12 2s5.285.204 7.134.346a2.76 2.76 0 0 1 2.543 2.5c.14 1.538.323 3.862.323 5.615s-.183 4.078-.323 5.615a2.76 2.76 0 0 1-2.543 2.501c-1.849.142-4.887.346-7.134.346s-5.285-.204-7.134-.346a2.76 2.76 0 0 1-2.543-2.5C2.183 14.538 2 12.214 2 10.46s.182-4.077.323-5.614a2.76 2.76 0 0 1 2.543-2.501M7.128 21.23a.77.77 0 0 1 .77-.768h8.205a.77.77 0 0 1 0 1.538H7.897a.77.77 0 0 1-.769-.77"
          clipRule="evenodd"
        ></path>
        <path
          fill="var(--light-gray-color)"
          fillRule="evenodd"
          d="M3.026 14.051a.77.77 0 0 1 .769-.769h16.41a.77.77 0 1 1 0 1.538H3.795a.77.77 0 0 1-.77-.769"
          clipRule="evenodd"
        ></path>
      </svg>
    ),
  },
];

const Sidebar = () => {
  return (
    <div className="w-[15rem]  bg-secondary-dark     border-r border-r-darkest-gray-color p-[1.5rem]  left-0 top-16 ">
      <nav>
        <ul className="flex flex-col gap-[1rem]">
          {sidebarItems.map((item, index) => (
            <SidebarItem
              key={index}
              title={item.title}
              href={item.href}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
