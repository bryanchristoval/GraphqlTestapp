# Set the default parameters for the build, can be overridden with either an
# environment variable or by using `make target KEY=VALUE`.

# ANDROID COMMANDS
run-android:
	. prepare-env.sh .env.$(ENV) .env && react-native run-android
build-android-release:
	. prepare-package.sh $(ENV) && . prepare-env.sh .env.$(ENV) .env && cd android && ./gradlew clean && ./gradlew assembleRelease
	#please config here
build-android-debug:
	react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res && cd android && ./gradlew assembleDebug

	# IOS COMMANDS
# Run IOS application locally while passing on .env configuration file
run-ios:
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios
run-ios-device:
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios --device
run-ios-simulator:
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios --simulator="iPhone X"
run-ios-release:
	# Prepare a 'release' version of the iOS app and run in simulator
	. prepare-env.sh .env.$(ENV) .env && react-native run-ios --configuration=release
run-reset:
	. prepare-package.sh $(ENV) && . prepare-env.sh .env.$(ENV) .env && react-native start --reset-cache