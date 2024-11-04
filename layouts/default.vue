<template>
  <IonApp>
    <IonPage>
      <IonHeader translucent>
        <IonToolbar>
          <IonTitle>
            FamFlavor.com
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <slot />
      </IonContent>
      <Menu />
    </IonPage>
  </IonApp>
</template>

<style scoped>
ion-content::part(background) {
  background: #ffede2;
}

ion-content::part(scroll) {
  color: #1e1e1e;
}
</style>