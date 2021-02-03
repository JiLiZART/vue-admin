<script lang="ts">
import { defineComponent } from 'vue';
import {
  Create,
  DateInput,
  TextInput,
  SimpleForm,
  required,
  minLength,
} from '@vue-admin/components';
import PostReferenceInput from './PostReferenceInput.vue';

const now = new Date();
const defaultSort = { field: 'title', order: 'ASC' };

export default defineComponent({
  name: 'CommentCreate',
  props: {},
  components: {
    Create,
    DateInput,
    TextInput,
    SimpleForm,
    PostReferenceInput,
  },
  data() {
    return {
      now,
      required,
      minLength,
      defaultSort,
    }
  }
})
</script>

<template>
  <Create>
    <SimpleForm :redirect="true">
      <PostReferenceInput
          source="post_id"
          reference="posts"
          allow-empty
          :validate="required()"
          :per-page="10000"
          :sort={defaultSort}
      />
      <TextInput
          source="author.name"
          :validate="minLength(10)"
          full-width
      />
      <DateInput source="created_at" :default-value="now" />
      <TextInput source="body" full-width multiline />
    </SimpleForm>
  </Create>
</template>
