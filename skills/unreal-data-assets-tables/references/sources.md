# UE 5.8 primary sources

Verified against Epic Games documentation for Unreal Engine 5.8 on 2026-07-19.

- [Data Assets](https://dev.epicgames.com/documentation/en-us/unreal-engine/data-assets-in-unreal-engine)
- [Asset Management](https://dev.epicgames.com/documentation/en-us/unreal-engine/asset-management-in-unreal-engine)
- [Data Driven Gameplay Elements](https://dev.epicgames.com/documentation/en-us/unreal-engine/data-driven-gameplay-elements-in-unreal-engine)
- [Object Pointers](https://dev.epicgames.com/documentation/en-us/unreal-engine/object-pointers-in-unreal-engine)
- [Asynchronous Asset Loading](https://dev.epicgames.com/documentation/en-us/unreal-engine/asynchronous-asset-loading-in-unreal-engine)
- [Asset Registry](https://dev.epicgames.com/documentation/en-us/unreal-engine/asset-registry-in-unreal-engine)
- [Data Registries](https://dev.epicgames.com/documentation/en-us/unreal-engine/data-registries-in-unreal-engine)
- [Data Validation](https://dev.epicgames.com/documentation/en-us/unreal-engine/data-validation-in-unreal-engine)
- [Cooking and Chunking](https://dev.epicgames.com/documentation/en-us/unreal-engine/cooking-content-and-creating-chunks-in-unreal-engine)
- [Preparing Assets for Chunking](https://dev.epicgames.com/documentation/en-us/unreal-engine/preparing-assets-for-chunking-in-unreal-engine)
- [`UPrimaryDataAsset` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UPrimaryDataAsset)
- [`UPrimaryAssetLabel` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UPrimaryAssetLabel)
- [`UDataTable` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/UDataTable)
- [`FPrimaryAssetRules` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Runtime/Engine/FPrimaryAssetRules)

Version-sensitive notes retained in this package:

- Primary Asset Label Blueprint subclasses do not work for chunking.
- Data Table/Curve Table pointers should not be cached beyond local scope across reimport.
- Data Registry-owned item pointers can become invalid when dynamically sourced data unloads.
- Data Validation commandlets run C++ rules by default; Python validators require registration.
