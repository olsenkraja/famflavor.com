<template>
  <IonPage>
    <IonHeader translucent>
      <IonToolbar>
        <IonTitle>
          FamFlavor.com
        </IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <slot />
    </IonContent>
    <IonTabs>
      <IonRouterOutlet />
      <IonTabBar slot="bottom">
        <IonTabButton
          tab="explore"
          href="/explore"
        >
          <IonIcon :icon="ioniconsSearchOutline" />
        </IonTabButton>

        <IonTabButton
          tab="compose"
          href="/compose"
        >
          <IonIcon :icon="ioniconsAddCircleOutline" />
        </IonTabButton>

        <IonTabButton
          tab="favorites"
          href="/favorites"
        >
          <IonIcon :icon="ioniconsHeartOutline" />
        </IonTabButton>

        <IonTabButton
          tab="profile"
          href="/profile"
        >
          <IonIcon :icon="ioniconsPersonOutline" />
        </IonTabButton>
      </IonTabBar>
    </IonTabs>
  </IonPage>
</template>