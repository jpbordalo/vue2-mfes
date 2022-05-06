const create = () => {
  console.log("Service Register - CREATE ACTION!!!!");
};

const ACTIONS = [
  [
    {
      resourceType: "Site",
      action: "CREATE",
      translationKey: "digitalTwin.actions.createNode",
      enable: true,
      callback: create,
    },
    {
      resourceType: "PhysicalPoint",
      action: "CREATE",
      translationKey: "digitalTwin.actions.createNode",
      enable: true,
      callback: create,
    },
    {
      resourceType: "Folder",
      action: "CREATE",
      translationKey: "digitalTwin.actions.createNode",
      enable: true,
      callback: create,
    },
  ],
  [
    {
      resourceType: "Workflow",
      action: "CREATE",
      translationKey: "digitalTwin.actions.createNode",
      enable: true,
      callback: create,
    },
  ],
  [
    {
      resourceType: "Enterprise",
      action: "EDIT",
      translationKey: "digitalTwin.actions.editNode",
      enable: true,
      callback: create,
    },
  ],
  [
    {
      resourceType: "Enterprise",
      action: "EXPORT_ALL",
      translationKey: "digitalTwin.actions.exportProject",
      enable: true,
      callback: create,
      actionUrl: "exportURL",
    },
  ],
];

export default {
  type: "WORKFLOW",
  scope: "workflow",
  moduleName: "Workflow",
  iconName: "workflow-xpto",
  actions: ACTIONS,
};
