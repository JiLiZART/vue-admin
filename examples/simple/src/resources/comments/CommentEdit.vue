<script lang="ts">
export default {
  name: 'CommentEdit',
  props: {
    record: {
      type: Object
    }
  },
  components: {
    Title,
    EditActions,
    Card,
    SimpleForm,
    TextInput,
    ReferenceInput,
    AutocompleteInput,
    OptionRenderer,
    LinkToRelatedPost,
    DateInput,
  },
  data() {
    return {
      inputText: '',
      basePath: '',
      resource: ' ',
      redirect: '',
      save: '',
      version: '',
      minLength,
    }
  }
}
</script>

<template>
  <div class="edit-page">
    <Title :default-title="`Comment #${record ? record.id : ''}`" />
    <div class="actions">
      <EditActions
          :base-path="basePath"
          :resource="resource"
          :data="record"
          has-show
          has-list
      />
    </div>
    <Card class="card" v-if="record">
      <SimpleForm
          :base-path="basePath"
          :redirect="redirect"
          :resource="resource"
          :record="record"
          :save="save"
          :version="version"
      >
        <TextInput disabled source="id" full-width />
        <ReferenceInput
            source="post_id"
            reference="posts"
            :per-page="15"
            :sort="{ field: 'title', order: 'ASC' }"
            full-width
        >
          <AutocompleteInput
              :match-suggestion="(filterValue, suggestion) => true"
              :input-text="inputText"
              :options="{ fullWidth: true }"
          >
            <template v-slot:optionText="optionText">
              <OptionRenderer/>
            </template>
          </AutocompleteInput>
        </ReferenceInput>

        <LinkToRelatedPost />
          <TextInput
              source="author.name"
              :validate="minLength(10)"
              full-width
          />
          <DateInput source="created_at" full-width />
          <TextInput
              source="body"
              :validate="minLength(10)"
              :full-width="true"
              :multiline="true"
          />
      </SimpleForm>
    </Card>
  </div>
</template>

<style lang="" scoped>
</style>
