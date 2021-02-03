<script lang="ts">
import { defineComponent } from 'vue'
import {
  DateField,
  ReferenceField,
  Show,
  SimpleShowLayout,
  TextField,
} from '@vue-admin/components';

export default defineComponent({
  name: 'CommentShow',
  props: {},
  components: {
    Show,
    SimpleShowLayout,
    TextField,
    ReferenceField,
    DateField
  }
})
</script>

<template>
  <Show>
    <SimpleShowLayout>
      <TextField source="id" />
      <ReferenceField source="post_id" reference="posts">
        <TextField source="title" />
      </ReferenceField>
      <TextField source="author.name" />
      <DateField source="created_at" />
      <TextField source="body" />
    </SimpleShowLayout>
  </Show>
</template>

<style lang="" scoped>
</style>
