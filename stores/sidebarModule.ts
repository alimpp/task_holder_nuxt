import { ref } from "vue";

export interface ISidebarItem {
  name: string;
  path?: string;
  active?: boolean;
  isOpen?: boolean;
  permission?: boolean;
  icon?: string;
  childs?: ISidebarItem[];
}

export const sidebarListData: ISidebarItem[] = [
  {
    name: "Dashboard",
    isOpen: true,
    permission: true,
    icon: "/sidebar/dashboard-icon.png",
    childs: [
      {
        name: "Dashboard",
        active: false,
        path: "/",
      },
    ],
  },
  {
    name: "Porjects",
    isOpen: true,
    permission: true,
    icon: "/sidebar/projects-icon.png",
    childs: [
      {
        name: "Projects List",
        active: false,
        path: "/projects/list",
      },
    ],
  },
];

export class SidebarModule {
  public sidebarState = ref<string>("close");
  public sidebarList = ref<ISidebarItem[]>(sidebarListData);

  constructor(sidebarState: string, sidebarList: ISidebarItem[]) {
    this.sidebarState.value = sidebarState;
    this.sidebarList.value = sidebarList;
  }

  handleChangeSidebarState() {
    switch (this.sidebarState.value) {
      case "close":
        this.sidebarState.value = "open";
        break;
      case "open":
        this.sidebarState.value = "close";
        break;
    }
  }
}

export const sidebarStoreModule = new SidebarModule("close", sidebarListData);
