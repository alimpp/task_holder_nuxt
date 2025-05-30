import { ref } from "vue";
import { useCookie } from "@/composable/useCookie";

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
      {
        name: "Friend Requests",
        active: false,
        path: "/friends/requests",
      },
      {
        name: "Send Friend Request",
        active: false,
        path: "/friends/send",
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
  {
    name: "Timeline",
    isOpen: true,
    permission: true,
    icon: "/sidebar/time-line.png",
    childs: [
      {
        name: "Notes",
        active: false,
        path: "/timeline/notes",
      },
      {
        name: "Posts",
        active: false,
        path: "/timeline/posts",
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

  handleHoverChangeSidebarState() {
    switch (this.sidebarState.value) {
      case "close":
        this.sidebarState.value = "open";
        break;
    }
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
  handleLogOut() {
    const { deleteCookie } = useCookie();
    deleteCookie("token");
  }
}

export const sidebarStoreModule = new SidebarModule("close", sidebarListData);
