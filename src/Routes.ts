export type Routes = {
  PermissionsPage: {};
  CameraPage: {};
  MediaPage: {
    path: string;
    type: 'video' | 'photo';
  };
};
