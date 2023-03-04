declare module '*/react-panelgroup';
declare module '*/ContextMenu';
declare module '*/WindowPanel';
declare module '*/Widget';

declare module '*.module.css' {
  const classes: { [key: string]: string };
  export default classes;
}

declare module 'types' {
  export interface PanelState {
    size?: number;
    minSize?: number;
    resize?: 'fixed' | 'dynamic' | 'stretch';
    windows: WindowState[];
  }

  export interface WindowState {
    selected: number | 0;
    widgets: string[];
  }

  export interface DockableProps {
    initialState: PanelState[];
    hidden?: {
      [key: string]: boolean;
    };
    onUpdate: (arg: PanelState[]) => void;
    onActive?: (id: string) => void;
    themeClass?: string;
    theme?: any;
    spacing?: number;
    hideMenus?: boolean;
    hideTabs?: boolean;
    active?: string;
    tabHeight?: number;
    children?: JSX.Element | JSX.Element[];
  }
}
