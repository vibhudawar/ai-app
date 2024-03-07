"use client";
import { Sidebar } from "flowbite-react";
import { HiOutlineMinusSm, HiOutlinePlusSm } from "react-icons/hi";
import { twMerge } from "tailwind-merge";
import { drawerContent } from "./test";

function SidebarItem({
  title,
  url,
  items,
}: {
  title: string;
  url: string;
  items: any;
}) {
  if (items && items.length > 0) {
    return (
      <Sidebar.Collapse
        key={url}
        label={title}
        renderChevronIcon={(theme, open) => {
          const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;

          return (
            <IconComponent
              aria-hidden
              className={twMerge(theme.label.icon.open[open ? "on" : "off"])}
            />
          );
        }}
      >
        {items.map((item: any) => (
          <SidebarItem key={item.url} {...item} />
        ))}
      </Sidebar.Collapse>
    );
  } else {
    return (
      <Sidebar.Item key={url} href={url}>
        {title}
      </Sidebar.Item>
    );
  }
}

export default function SideBar() {
  return (
    <Sidebar
      aria-label="Sidebar with multi-level dropdown example"
      className="h-screen"
    >
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Collapse
            label="Footer menu"
            renderChevronIcon={(theme, open) => {
              const IconComponent = open ? HiOutlineMinusSm : HiOutlinePlusSm;
              return (
                <IconComponent
                  aria-hidden
                  className={twMerge(
                    theme.label.icon.open[open ? "on" : "off"]
                  )}
                />
              );
            }}
          >
            {drawerContent.menu.items.map((item) => (
              <SidebarItem key={item.url} {...item} />
            ))}
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
