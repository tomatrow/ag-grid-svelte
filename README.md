# @tomatrow/ag-grid-svelte

ag-grid bindings for svelte 5

## installation

```shell
pnpm i -D @tomatrow/ag-grid-svelte
```

## see it live

- [minimal ag-grid example](https://svelte.dev/playground/hello-world?version=5.25.7#H4sIAAAAAAAAE3VSwW7bMAz9FUKnDXDqYN2KVkiHFSm6XXpZcxniHFSbdoTJkiExzQzD_z7RaoYEyW7i4-Pj05MGYVWLQoofaIyDvfOmgg9YacLqo8hErQ0GIdeDoL5jHgMRf5966Lqr8IaGGHtVAS_hpbOElqKMWITS647AKNvcF4JCIb4WtiDdds4TDPDQfPe6eplGYYTauxYK8Y1cq8i7fa6aWRMJsyReiNNhY5aubXdWU__sqp05kjgMlgcCzy7y5Ic92MXxbtYN1BuMLreomy1JuJ2_bdPGTnnVhvthgHZaEySsz5dvYByZ7TrSzjKdq4LyHH66PTwqUhJWW4QqnoAcvMajDp1RPVZXiRvvnHjrVBcUd6rfKOOVVhiMKkTGJtAw8swH-MVY53UZWTef777MM0CDJUVEAvldTCU7V3tyvjoRe5q9oNcYjtSur29P1WplwmW5lesdnbpbOu9Mcvyu9-nuZn5JL8ltsn95LZ3ZtRYesdYxX05TpgIDUEywnPrhPyGmbuTzOw1QazQVG2KvhYj24Rhku2foZPgMPRjnxoZ38YPn8TfFX0_4h4TkuMdNrJQ2e20rIacrjn8Bvx0983gDAAA=)
- [custom cell example](https://svelte.dev/playground/hello-world?version=5.25.7#H4sIAAAAAAAAE61X72_byBH9Vya6tnAAc8X9Qe5SlY36nCA5ILk7NGn6IQpwNEnJbFakTqSs2IL-975ZUr64l0NRoB9IkbuzO2_evBmuDpMmX1eT2eR15X1L-3brSzqryrqvyueT88my9lU3mX08TPr7DdvxAMbHVVebjejuKt_z2E3eVd8aL9qmr5oe20zmXbGtNz35vFldLCZ9t5hcLppFX6837banA12tXm3r8l1Yev7k7V1TbzZV__eqKatttb1u1xs60nLbrmkx-VvfrvN-2-6n-SpaYU00eF9Mnu7uPdatd03d379ty52vftvitLA4GQxr-UIAXU9Fu1xW1W2766qOLuhPXZ_31dnHYNQfhp9FzwTMsN2Husk_53SdLwHi_DSbl-W26roZ_aLjGJNb393kJX2ovc9XFb3Y0j_gmpSUj5PndH1FmYpjF-aqkt6x4-6Xx03r7lWLkXJG_XZXDaPH8z_A9f62ouvdhq5DNN-EpuKU_ll3HHXd0NVdRT8VVY6XsgpgGE1i_i9ofs6b-jOcDGjoL_S-yr-JKZEx_QizHIl4vb8nGUt62RQ1MOTdIyr1v6Hin0_PcX_McbvpazxweqGy-q4qz0bM0NaLvM9nT2Qwbr-CLNv9D9j87EAlrOj4nC4uw6PgUEe7sl2_ye_bXc-h57u-fV3Vq9v-MeCi9bt186JaIuKPJ-QHWtaVL3kJb7WY0PH8G3MjVU-nTw-L_tHuRMRXLMMxiv9UWLP_VnV_sO7nfJuvAfxsEx4CAWdfIVj03bAXKNx1qNf37Wrlq2tscf61lRBi2OG3wePz0_NxePjEPzw6nw4NhZtIc_hu9PA7B0jLZoR3ShBSFDab3-z6vm2o8DmEVnfRKtBzcWCzZ-JE15HapvB18fnicDaE9nQeinn2dOT58XIU_Xf1kv5jt1M8r366ev_yxelt3t2t6MvaNx16423fb2bT6X6_F3st2u1qih4QT2GCHO_rsr-FkVZ4uQ0qOr3d1dX--_YLXmOKKZGKL7TZ-bMooh8g86HhvYKWwmtHN_fhbXiJiB138Lyq-9vdjUA_nK4wHdU8Px3uN769ma5RjNV2ClaqpqtE_6WnKLqcb_L-Frr0HhCK3XaL1n_d-nYLbCWG1spqMknmrbBZpGKfCiUJv0l410JrHxmhksi4IoJRSlZkJpJWoOng7pJIZcIa0rFQ9mGtnUgi7WLh0lzKhPji0ONISSF1JDORFrxcyySSUjgX6UQY6SLpRAaDJBGxi5QS0hQ8ZhMZaRGnNtLwDExwBqsUyIRUVyo2xFfwQVIjmkwYlUsHeM6cfMOrIpkIzc6V0FgBoJmNZCyMlpQKp-AfePGQSwt7Gu5hW44ug22RwFxZMOK0oswBOEhJbAbPRkhLyuKeu5jcCIjgTTmSaWGElew1ZgpdDFdwai3BSUoqARpvEpFmpIRD6KBBKybKJvhJkIKUGUisidgYFMTYas33hFQqUl1ECEnLSGrk0DJ3JkvY2CgXGMAGAO5y64SicBvYkSHZYEK7QokUUYjUEVxCrcIkgJtKANcgRiMUXENoGRLK8UnpBZJrvIgzThv0YAPbMkhEplCHhiAUMiWs4wzJxHOKwZvQuYKU-BrRGGSEYWfyYQ3YLiOjvY1DPowPosFOwGN9lAL6oAzMMDa48SloSklnrFytLIKwiXmjM2RIkbYqLNM60lIYmxslDIXb4D8TCmQAA-fAyjCSwCHYZulYFkuqCggx0aRBTQQqEyRccKIMyELUSItyr2X6QRktrPYZkprA2iU-S3kNCFGpB-dcEzJXiBq8h_uoOEcKhWehZCSdhvsoKskJ0SLTBQK2GdyyLgiMxqjULIQJh5rl4xAH-7JcgMqYKBVWmYhhSY4sjVIk4lc8pqhrWLLqMqEzGJrUG34CKvewZppVQuAuRvgGd8PJsjFEhjik4XVcHSiWJNQzlzBq12qwqbCfhLZkMEFdDzIrkDCHWGLWPQoIgC1xUMR6TIoUrHKN8CGMu4YZkpw5LjVmGmmQBbhAgJCugk5DGOnQqRTK06xTEAalxlCz9RAd-htzCOIhJ257D2-NRUFahQ7TRQb4UWWAEiWoI6HYGpFDc04_vFUZ9OzAdeIBJdCunI-E4U6WhpBVhhhMwr1Bc0iKlcPdBQ01ZSZj9p7aIoEiHDcdLhiuM7AUc4yWBYpmAYTQi-V8cStGJSM3MnTQFLyDPRklKGVOqcgcsoYkBcJcoZHejAsBClT8k6h06DrkDEsoQfXZtUSksQvRu6zgbqAhSjSe2DBQpx2nOcvSyODrEHqzMUAuERvqU2M75MohPABJh8oHm85xY0Adw6m2A3rBLeiNwWnbpBCcvENAWBLqADKT4MiHcEF4nDwsJtPLOX9kTx_vWeW76vF7Pb-5fPnj1fdvXhJ_uefTm5PZtF4Ox4npcJ7A-GE6Hkd4opl_faqiw3jQPI7nkovDgdbhDwkf_X7_N-UTHY80Daecedff-yr4HY8u4yErnAlmICb-81-HkeFg8GSo4C_xjLZVOQ6Udbfx-f2Mlr76Mo7lvl41Ec7RfGDCxx1f-XHmXzhY1cv7aPxLN6NukxdVlG_bXTPseAyHshEi_vz11Zd-MuND9_ET3vLa7-umnMyWOfP6bxAdBx9_DgAA)
- [todo example](https://svelte.dev/playground/hello-world?version=5.25.7#H4sIAAAAAAAAE91XzW7jNhB-lYnSg4Ta8uZUQLWdTRO0G6B_2O32YvlAi7RNLEUKIhXHUPUG-wr7cn2SDknJlmJn2-awKAofRA2HM9988yO6DiTJWZAEb5gQCnaqFBRCRrlhNApGwZoLpoNkUQdmX1g9K0B5e-qmKGL9wISxshXR7Jw8U9IwadBMMNVZyQsDgsjNLA2MToN5KlPD80KVBmq42fxQcvrOHR0N3t5JXhTMvGWSspKVtyovoIF1qXJIg9dG5cSUajchm_EGz4y99zQYWLcxgDX5S2G4knrkJfe3GHxn-FdSkhx3boRAH3kludn_pGgl2NFd5yTrFJwf6wkjLdckY_CbogpqK0MpTUCbksuNfzdEfxhKqJIsgZVSghFnqPH2kDptwKAtnTiTiyXM4CttiGHhYhkddQil31XGKPlW7bwqKtZgXSNeSscrtztGjtIA43YQEDauvfM1ERpD7PtVnqWkT9nUmp5bEMgWf2A0bINEw3fEkAQWcRw7xKMBqOXI620wh2p3j7jCGiiegCaC2dwtY04HWreCaB2i5aijEslcg5XEVv8aD8DFbDZwhLIISmaqUvpgHDr3foYKr9CMujzkP5K9qoxjrTLqDeObrUGW_H6mRJXLO7ZGUhad7QO01GwZQVp-xiawBi4P5-xvx6nZJvDNq55MY12Slejo7-1gn2EpncqzXqkmf9cgz5zzJY4JKNrFmQbweXaZCXsBImTvJrGc2xThyVF_H7PvzR6FTdStm4Nqz-ZasMcErgbBM-EK15bpgEQbxrmqsL-Typg9Xxloe8spZXJsLXZlMISY4tSyybEh3m5xYrHv0TOm0JRVPyV2Wvoknlb0cxXaO66kdfA7ERXzXmjIHnBePonuOAqw-Vx_xWsuaRjatfNnF13YzkLc9lT0lKULf-bQJE-dIOvoxMOIJds5cEB0O7PgD5CVEBFcX7sR0rfgQLQGXPaOxL60COx8GhTBP0vLFy6V_08ROBOWdPRxcTEsgpen82Wj7ssl8L8zWCkTzLB_P1v9YmkfVjqd-MuWvWDJ-rI13xvbWKjeGjQJdOvPYMaKdj7qS2Tfa3-W_xbQ1H9uO5iZzejMf4gxg-3H-JgVJTPBsw-zOjzUs46LSm9Df5vJyn1hVFwSiR_r9-_v78LoeJ2xOJGkk1tN1GKZd15uKG3RTTwAt1MnDNVb3brNYiwVZTFCvUdKHu3MexXB13DluZjwNS7qSUtvMyR7kMoX8_3atz13_vt97xA90_xPEtRLnbdj59H4apgjOEu-LlDGQndsBFdRM__z08chb-dYmFL-AF222-uyNIRLVra3_mm_ywaqaQB1e_ts2khmdQ25u4fbu9fp7XwJTQOTua17dOyKfqrNXjDnKh4C6IZJshFqRcRxtji9_qiJe6NjOIIoR2LIPgGJlfZtryOfNKR7NK4fWzj4n8iwRxMk9ovVLPGNcLFDfoPE1WvzF-ghv2mWDQAA)

## basic usage

```svelte
<script lang="ts">
	import { AgGridSvelte } from "@tomatrow/ag-grid-svelte"
	import { AllCommunityModule } from "ag-grid-community"
</script>

<AgGridSvelte
	style="height: 80vh"
	params={{ modules: [AllCommunityModule] }}
	options={{
		// Row Data: The data to be displayed.
		rowData: [
			{ make: "Tesla", model: "Model Y", price: 64950, electric: true },
			{ make: "Ford", model: "F-Series", price: 33850, electric: false },
			{ make: "Toyota", model: "Corolla", price: 29600, electric: false }
		],
		// Column Definitions: Defines the columns to be displayed.
		columnDefs: [{ field: "make" }, { field: "model" }, { field: "price" }, { field: "electric" }]
	}}
/>
```

## advanced custom cell

```svelte
<script lang="ts">
	import { AgGridSvelte, AgGridSvelteSnippetRendererComp } from "@tomatrow/ag-grid-svelte"
	import { type ICellRendererParams, AllCommunityModule } from "ag-grid-community"

	interface Coffeehouse {
		name: string
	}
</script>

<AgGridSvelte
	style="height: 80vh"
	params={{ modules: [AllCommunityModule] }}
	options={{
		rowData: [
			{ name: "Vinaka Cafe" },
			{ name: "The Cup Coffee" },
			{ name: "Panikin Coffee & Tea" }
		],
		columnDefs: [
			{
				field: "name",
				cellRenderer: AgGridSvelteSnippetRendererComp,
				cellRendererParams: (params: ICellRendererParams<Coffeehouse>) => ({
					snippet: customTextCell,
					...params
				})
			}
		]
	}}
/>

{#snippet customTextCell({ params: { data } }: { params: ICellRendererParams<Coffeehouse> })}
	<p>{data?.name}</p>
{/snippet}
```
