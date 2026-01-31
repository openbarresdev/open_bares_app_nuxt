<template>
  <div class="lg:max-w-2xl m-1">
    <CommonPageHeading
      title="Supporting Documents"
      description="Please attach the following documents with your application"
    />

    <div class="space-y-6 max-lg:mb-24 mt-4">
      <div
        v-for="doc in requiredDocuments"
        :key="doc.id"
        class="p-4 border rounded-lg shadow-sm bg-white"
        :class="{ 'border-green-200 bg-green-50': uploadedDocuments[doc.id] }"
      >
        <div class="flex items-center justify-between mb-3">
          <div>
            <h3 class="font-semibold text-base text-gray-800">
              {{ doc.name }}
              <span v-if="doc.required" class="text-red-500 ml-1">*</span>
            </h3>
            <p class="text-sm text-gray-600 mt-1">{{ doc.description }}</p>
            <div class="flex items-center gap-2 mt-1">
              <span class="text-xs text-gray-500">
                Max size: {{ formatFileSize(doc.maxSize) }}
              </span>
              <span class="text-xs text-gray-500">•</span>
              <span class="text-xs text-gray-500">
                Formats: {{ doc.allowedTypes.join(", ") }}
              </span>
            </div>
          </div>

          <div v-if="uploadedDocuments[doc.id]" class="flex items-center gap-2">
            <span
              class="text-green-600 font-medium text-sm flex items-center gap-1"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                  clip-rule="evenodd"
                />
              </svg>
              Uploaded
            </span>
            <button
              @click="removeDocument(doc.id)"
              class="text-red-500 hover:text-red-700 p-1"
              title="Remove document"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <!-- Zone d'upload -->
        <div v-if="!uploadedDocuments[doc.id]" class="mt-4">
          <div
            class="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors cursor-pointer"
            @dragover.prevent="dragover = doc.id"
            @dragleave="dragover = null"
            @drop.prevent="handleDrop($event, doc)"
            @click="triggerFileInput(doc.id)"
            :class="{ 'border-blue-400 bg-blue-50': dragover === doc.id }"
          >
            <input
              :ref="`fileInput-${doc.id}`"
              type="file"
              class="hidden"
              :accept="getAcceptedTypes(doc.allowedTypes)"
              @change="handleFileSelect($event, doc)"
            />

            <div class="flex flex-col items-center justify-center space-y-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-12 w-12 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                />
              </svg>
              <div>
                <p class="text-sm font-medium text-gray-700">
                  Click to upload or drag and drop
                </p>
                <p class="text-xs text-gray-500 mt-1">
                  {{ doc.allowedTypes.map((t) => `.${t}`).join(", ") }} up to
                  {{ formatFileSize(doc.maxSize) }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- Document uploadé -->
        <div v-else class="mt-4 p-3 bg-gray-50 rounded-lg">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-3">
              <div class="p-2 bg-blue-100 rounded">
                <span class="icon-[tabler--file] text-blue-600 size-6"></span>
              </div>
              <div>
                <p class="font-medium text-sm text-gray-800">
                  {{ uploadedDocuments[doc.id].originalName }}
                </p>
                <p class="text-xs text-gray-500">
                  {{ formatFileSize(uploadedDocuments[doc.id].size) }} •
                  Uploaded
                  {{ formatDate(uploadedDocuments[doc.id].uploadedAt) }}
                </p>
              </div>
            </div>
            <div class="flex items-center gap-2">
              <a
                :href="uploadedDocuments[doc.id].url"
                target="_blank"
                class="btn btn-sm btn-ghost text-blue-600 hover:text-blue-800"
                title="View document"
              >
                <span class="icon-[tabler--eye] size-5"></span>
              </a>
              <button
                @click="downloadDocument(uploadedDocuments[doc.id])"
                class="btn btn-sm btn-ghost text-green-600 hover:text-green-800"
                title="Download"
              >
                <span class="icon-[tabler--download] size-5"></span>
              </button>
            </div>
          </div>
        </div>

        <!-- Upload progress -->
        <div v-if="uploadProgress[doc.id]" class="mt-4">
          <div class="flex items-center justify-between text-sm mb-1">
            <span class="text-gray-700">Uploading...</span>
            <span class="font-medium">{{ uploadProgress[doc.id] }}%</span>
          </div>
          <div class="w-full bg-gray-200 rounded-full h-2">
            <div
              class="bg-blue-600 h-2 rounded-full transition-all duration-300"
              :style="{ width: uploadProgress[doc.id] + '%' }"
            ></div>
          </div>
        </div>

        <!-- Error message -->
        <div
          v-if="uploadErrors[doc.id]"
          class="mt-3 p-3 bg-red-50 text-red-700 text-sm rounded-lg"
        >
          {{ uploadErrors[doc.id] }}
        </div>
      </div>
    </div>

    <!-- Resume section -->
    <div
      class="mt-8 p-4 bg-blue-50 rounded-lg border border-blue-200 max-lg:mb-20"
    >
      <h4 class="font-semibold text-blue-800 mb-2">Upload Summary</h4>
      <div class="flex items-center justify-between">
        <div>
          <p class="text-sm text-blue-700">
            {{ uploadedCount }} of {{ requiredDocuments.length }} documents
            uploaded
          </p>
          <p
            v-if="missingRequired.length > 0"
            class="text-sm text-red-600 mt-1"
          >
            Required documents missing:
            {{ missingRequired.map((d) => d.name).join(", ") }}
          </p>
        </div>
        <div class="text-right">
          <p class="text-2xl font-bold text-blue-800">
            {{ uploadPercentage }}%
          </p>
          <p class="text-xs text-blue-600">Complete</p>
        </div>
      </div>
    </div>

    <div
      class="lg:static fixed bottom-0 left-0 right-0 bg-white w-full p-2 mt-8"
    >
      <button
        @click="submitDocuments"
        :disabled="isSubmitting || missingRequired.length > 0"
        class="btn btn-xl rounded-xl btn-primary btn-gradient btn-block text-base border-none lg:max-w-60 lg:h-12 my-0"
        :class="{ 'opacity-50 cursor-not-allowed': missingRequired.length > 0 }"
      >
        <span v-if="isSubmitting" class="loading loading-spinner"></span>
        {{ isSubmitting ? "Submitting..." : "Complete Application" }}
        <span class="icon-[tabler--chevron-right] size-5"></span>
      </button>

      <p
        v-if="missingRequired.length > 0"
        class="text-red-500 text-sm text-center mt-2"
      >
        Please upload all required documents before submitting
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { useAuth } from "~/composables/useAuth";
import { useStepStore } from "~/stores/useStepStore";

const { userId, projectId, checkAuth } = useAuth();
const stepStore = useStepStore();

// States
const dragover = ref(null);
const isSubmitting = ref(false);
const uploadProgress = ref({});
const uploadErrors = ref({});
const uploadedDocuments = ref({});
const supportingDocId = ref(null);

// Données des documents requis
const requiredDocuments = ref([
  {
    id: "company_registration_document",
    name: "Company registration document",
    description: "Official company registration document",
    required: true,
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 1,
  },
  {
    id: "technical_specifications",
    name: "Technical Specifications Document",
    description: "Technical Specifications of Project",
    required: true,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 2,
  },
  {
    id: "business_plan",
    name: "Preliminary Feasibility Business Plan",
    description: "Detailed business proposal and financial projections",
    required: true,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 3,
  },
  {
    id: "financial_projections",
    name: "Financial Projections Document",
    description: "Details of financial projections",
    required: true,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 4,
  },
  {
    id: "banking_reference",
    name: "Banking Reference",
    description: "Banking reference document",
    required: true,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 5,
  },
  {
    id: "audited_financial_statement",
    name: "Audited Financial Statement",
    description: "Valid Audited Financial Statement document for last 3 years",
    required: false,
    maxSize: 5 * 1024 * 1024, // 5MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 6,
  },
  {
    id: "management_cvs",
    name: "Management CVs",
    description: "Management CVs document",
    required: false,
    maxSize: 5 * 1024 * 1024,
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 7,
  },
  {
    id: "environmental_impact_assessment",
    name: "Environmental Impact Assessment",
    description: "Detailed business proposal and financial projections",
    required: false,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 8,
  },
  {
    id: "government_approvals",
    name: "Government Approvals",
    description: "Approvals or licence by Government",
    required: false,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 9,
  },
  {
    id: "market_research_reports",
    name: "Market Research Reports",
    description: "Reports of current year market research",
    required: false,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 10,
  },
  {
    id: "other_document",
    name: "Other document",
    description: "Other required document",
    required: false,
    maxSize: 20 * 1024 * 1024, // 20MB
    allowedTypes: ["pdf", "jpg", "png", "jpeg"],
    order: 11,
  },
]);

// Computed properties
const uploadedCount = computed(() => {
  return Object.keys(uploadedDocuments.value).length;
});

const uploadPercentage = computed(() => {
  return Math.round(
    (uploadedCount.value / requiredDocuments.value.length) * 100
  );
});

const missingRequired = computed(() => {
  return requiredDocuments.value.filter(
    (doc) => doc.required && !uploadedDocuments.value[doc.id]
  );
});

// Functions
const formatFileSize = (bytes) => {
  if (bytes === 0) return "0 Bytes";
  const k = 1024;
  const sizes = ["Bytes", "KB", "MB", "GB"];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

const getAcceptedTypes = (types) => {
  return types.map((type) => `.${type}`).join(",");
};

const triggerFileInput = (docId) => {
  const input = document.querySelector(`input[ref="fileInput-${docId}"]`);
  if (input) input.click();
};

const handleDrop = (event, doc) => {
  dragover.value = null;
  const files = event.dataTransfer.files;
  if (files.length > 0) {
    uploadFile(files[0], doc);
  }
};

const handleFileSelect = (event, doc) => {
  const file = event.target.files[0];
  if (file) {
    uploadFile(file, doc);
  }
};

const uploadFile = async (file, doc) => {
  // Validation
  const fileExtension = file.name.split(".").pop().toLowerCase();
  if (!doc.allowedTypes.includes(fileExtension)) {
    uploadErrors.value[
      doc.id
    ] = `File type not allowed. Allowed: ${doc.allowedTypes.join(", ")}`;
    return;
  }

  if (file.size > doc.maxSize) {
    uploadErrors.value[doc.id] = `File too large. Max size: ${formatFileSize(
      doc.maxSize
    )}`;
    return;
  }

  // Reset error
  uploadErrors.value[doc.id] = null;

  // Simulate progress
  uploadProgress.value[doc.id] = 0;
  const progressInterval = setInterval(() => {
    if (uploadProgress.value[doc.id] < 90) {
      uploadProgress.value[doc.id] += 10;
    }
  }, 200);

  try {
    // Vérifier/créer le SupportingDocuments
    if (!supportingDocId.value) {
      const supportingDoc = await $fetch("/api/supporting-documents/init", {
        method: "POST",
        body: {
          userId: userId.value,
          projectId: projectId.value,
        },
      });
      supportingDocId.value = supportingDoc.id;
    }

    const formData = new FormData();
    formData.append("file", file);
    formData.append("docType", doc.id);
    formData.append("supportingDocId", supportingDocId.value.toString());
    formData.append("originalName", file.name);

    const response = await $fetch("/api/documents/upload", {
      method: "POST",
      body: formData,
      onUploadProgress: (progressEvent) => {
        const percentCompleted = Math.round(
          (progressEvent.loaded * 100) / progressEvent.total
        );
        uploadProgress.value[doc.id] = percentCompleted;
      },
    });

    if (response.success) {
      // Update uploaded documents
      uploadedDocuments.value[doc.id] = response.document;

      // Store in local storage for persistence
      localStorage.setItem(
        `document_${doc.id}_${projectId.value}`,
        JSON.stringify(response.document)
      );

      // Clear progress
      clearInterval(progressInterval);
      uploadProgress.value[doc.id] = 100;

      // Clear progress after delay
      setTimeout(() => {
        uploadProgress.value[doc.id] = null;
      }, 1000);
    }
  } catch (error) {
    console.error("Upload failed:", error);
    uploadErrors.value[doc.id] =
      error.message || "Upload failed. Please try again.";
  } finally {
    clearInterval(progressInterval);
  }
};

const removeDocument = async (docId) => {
  if (!confirm("Are you sure you want to remove this document?")) return;

  try {
    const document = uploadedDocuments.value[docId];
    const response = await $fetch(`/api/documents/${document.id}`, {
      method: "DELETE",
      body: {
        supportingDocId: supportingDocId.value,
      },
    });

    if (response.success) {
      // Remove from state
      delete uploadedDocuments.value[docId];
      localStorage.removeItem(`document_${docId}_${projectId.value}`);
    }
  } catch (error) {
    console.error("Failed to remove document:", error);
  }
};

const downloadDocument = async (document) => {
  try {
    const response = await fetch(document.url);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = document.originalName;
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  } catch (error) {
    console.error("Download failed:", error);
  }
};

const submitDocuments = async () => {
  if (missingRequired.value.length > 0) return;

  isSubmitting.value = true;
  try {
    const response = await $fetch("/api/supporting-documents/submit", {
      method: "POST",
      body: {
        supportingDocId: supportingDocId.value,
        projectId: projectId.value,
        documentIds: Object.values(uploadedDocuments.value).map(
          (doc) => doc.id
        ),
      },
    });

    if (response.success) {
      // Update ApplicationSettings steps
      await stepStore.saveSection(
        "documents",
        "supportingDocuments",
        {
          isComplete: true,
          submittedAt: new Date().toISOString(),
          uploadedDocuments: Object.keys(uploadedDocuments.value),
        },
        userId.value,
        projectId.value
      );

      // Clear localStorage
      requiredDocuments.value.forEach((doc) => {
        localStorage.removeItem(`document_${doc.id}_${projectId.value}`);
      });

      alert("Application submitted successfully!");
      navigateTo("/user/dashboard");
    }
  } catch (error) {
    console.error("Submission failed:", error);
    alert("Failed to submit application. Please try again.");
  } finally {
    isSubmitting.value = false;
  }
};

// Load existing documents on mount
onMounted(async () => {
  await checkAuth();

  try {
    // Load from localStorage
    requiredDocuments.value.forEach((doc) => {
      const saved = localStorage.getItem(
        `document_${doc.id}_${projectId.value}`
      );
      if (saved) {
        uploadedDocuments.value[doc.id] = JSON.parse(saved);
      }
    });

    
    // Fetch supporting documents record
    const supportingDoc = await $fetch(
      `/api/supporting-documents?projectId=${projectId.value}`
    );

    if (supportingDoc.success && supportingDoc.data) {
      supportingDocId.value = supportingDoc.data.id;

      const documents = await $fetch(
        `/api/documents?supportingDocId=${supportingDoc.data.id}`
      );

      if (documents.success && documents.data) {
        const docsArray = Array.isArray(documents.data)
          ? documents.data
          : documents.data.documents || [];

        docsArray.forEach((doc) => {
          uploadedDocuments.value[doc.docType] = doc;
        });
      }
    }
  } catch (error) {
    console.error("Failed to load documents:", error);
  }
});
</script>
