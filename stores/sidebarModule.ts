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
    name: "Friends",
    isOpen: true,
    permission: true,
    icon: "/sidebar/friends-icon.png",
    childs: [
      {
        name: "Friends List",
        active: false,
        path: "/friends/list",
      },
    ],
  },
  {
    name: "Profile",
    isOpen: true,
    permission: true,
    icon: "/sidebar/user-icon.png",
    childs: [
      {
        name: "User Profile",
        active: false,
        path: "/profile/userProfile",
      },
    ],
  },
];

export class SidebarModule {
  public sidebarState = ref<string>("open");
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

export const sidebarStoreModule = new SidebarModule("open", sidebarListData);
