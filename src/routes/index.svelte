<script context="module">
    import {get} from "svelte/store";
    import {atlassianTenantName,spaceRootPage} from "../stores.js";

    export async function load({fetch}) {
        const response = await fetch(
            `https://corsproxy.unixfy.net/?https://${get(atlassianTenantName)}.atlassian.net/wiki/rest/api/content/${get(spaceRootPage)}/child/page?expand=body.atlas_doc_format`
        );

        return {
            // status: response.status,
            props: {
                spacedata: response.ok && (await response.json())
            }
        }
    }
</script>
<script>
    export let spacedata;
    import SectionsList from '$components/SectionsList.svelte';
</script>

<div class="h-[calc(50vh)] flex bg-[url('/images/bg.webp')] bg-center bg-auto bg-grey-500">
    <div class="h-100 m-auto text-center drop-shadow-md bg-gray-600 bg-opacity-95 rounded-lg p-8">
        <h1
                class="font-display sm:text-3xl md:text-4xl lg:text-5xl text-2xl font-bold bg-gradient-to-r from-[#7BC6CC] to-[#BE93C5] bg-clip-text text-transparent"
        >
            Welcome to Unixfy Docs
        </h1>
        <h2 class="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold my-6 text-white ">
            What are you looking for today?
        </h2>

        <div class="flex items-center justify-center w-full">
            <form class="border bg-white rounded overflow-hidden flex w-full">
                <input
                        class="form-input border-0 w-full focus:border-blue-500"
                        type="text"
                        placeholder="Search..."
                />
                <button class="flex items-center justify-center px-4">
                    <i class="fas fa-search"></i>
                </button>
            </form>
        </div>
    </div>
</div>

<div class="text-black dark:text-white bg-white dark:bg-black min-h-[calc(50vh)]">
    <div class="ct py-10 ">
        <h1 class="font-display sm:text-2xl md:text-3xl lg:text-4xl text-xl font-semibold mb-5">
            Sections
        </h1>
        <SectionsList data="{spacedata}"/>
    </div>
</div>
