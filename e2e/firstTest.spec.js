describe('Example', () => {
  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('should show Home screen', async () => {
    await expect(element(by.id('home_screen'))).toBeVisible();
  });

  // it('should show Camera screen after tap', async () => {
  //   await element(by.label('action_camera_button')).tap();
  //   await expect(element(by.id('camera_screen'))).toBeVisible();
  // });
});