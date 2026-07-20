# UE 5.8 primary sources

Verified 2026-07-19.

- [Enhanced Input](https://dev.epicgames.com/documentation/en-us/unreal-engine/enhanced-input-in-unreal-engine)
- [Enhanced Input API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/EnhancedInput)
- [`ETriggerEvent` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/EnhancedInput/ETriggerEvent)
- [`UEnhancedInputComponent` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/EnhancedInput/UEnhancedInputComponent)
- [Add Mapping Context Blueprint API](https://dev.epicgames.com/documentation/en-us/unreal-engine/BlueprintAPI/Input/AddMappingContext)
- [`UEnhancedInputUserSettings` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/EnhancedInput/UEnhancedInputUserSettings)
- [`UEnhancedInputDeveloperSettings` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/EnhancedInput/UEnhancedInputDeveloperSettings)
- [`UPlayerMappableKeySettings` API](https://dev.epicgames.com/documentation/en-us/unreal-engine/API/Plugins/EnhancedInput/UPlayerMappableKeySettings)
- [Register Input Mapping Context](https://dev.epicgames.com/documentation/en-us/unreal-engine/BlueprintAPI/EnhancedInput/UserSettings/RegisterInputMappingContext)
- [Save Settings](https://dev.epicgames.com/documentation/en-us/unreal-engine/BlueprintAPI/EnhancedInput/UserSettings/SaveSettings)
- [Unreal Engine 5.8 Release Notes](https://dev.epicgames.com/documentation/en-us/unreal-engine/unreal-engine-5-8-release-notes)

Version note: UE 5.8 unifies Enhanced Input and Common Input/UI workflows and fixes state loss
and re-firing around mapping rebuilds. Epic's current APIs expose `UEnhancedInputUserSettings`,
player-mappable profiles, mapping rows/slots, failure reasons, apply, and save operations. The
gameplay-buffer procedure in this skill is an explicit project-layer pattern, not a claim that
Enhanced Input provides a built-in precondition buffer.
