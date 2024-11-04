<script lang="ts" setup>
import {actionSheetController} from '@ionic/vue'
import type {UserPhoto} from '~/composables/usePhotoGallery'

const {photos, takePhoto, deletePhoto} = usePhotoGallery()

const showActionSheet = async (photo: UserPhoto) => {
  const actionSheet = await actionSheetController.create({
    header: 'Photos',
    buttons: [
      {
        text: 'Delete',
        role: 'destructive',
        icon: ioniconsTrash,
        handler: () => {
          deletePhoto(photo)
        },
      },
      {
        text: 'Cancel',
        icon: ioniconsClose,
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        },
      },
    ],
  })
  await actionSheet.present()
}
</script>

<template>
  <div>
    <IonGrid>
      <IonRow>
        <IonCol
          v-for="photo in photos"
          :key="photo.filepath"
          size="6"
        >
          <IonImg
            :src="photo.webviewPath"
            @click="showActionSheet(photo)"
          />
        </IonCol>
      </IonRow>
    </IonGrid>

    <IonFab
      slot="fixed"
      horizontal="center"
      vertical="bottom"
    >
      <IonFabButton @click="takePhoto()">
        <IonIcon :icon="ioniconsCamera" />
      </IonFabButton>
    </IonFab>
  </div>
</template>
