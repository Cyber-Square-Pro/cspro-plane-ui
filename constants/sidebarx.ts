

// Define the constants with literal values
export const SidebarTypes = {
    ATTENDANCE: "ATTENDANCE",
    ONBOARDING: "ONBOARDING",
  } as const;
  
  // Create a type alias that extracts the values of the constants
  export type SidebarType = typeof SidebarTypes[keyof typeof SidebarTypes];
  