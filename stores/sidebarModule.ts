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

const sidebarListData: ISidebarItem[] = [
  {
    name: "Porjects",
    isOpen: false,
    permission: true,
    icon: "/public/",
    childs: [
      {
        name: "Projects List",
        active: false,
        path: "/projects/list",
      },
      {
        name: "Create Project",
        path: "/projects/create",
        active: false,
      },
      {
        name: "Update Project",
        path: "/projects/update",
        active: false,
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
