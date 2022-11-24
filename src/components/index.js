/* eslint-disable */

import { CustomLoading, RetryBox, EmptyListMessageBox, ShareLoadingMask, } from './CustomComponents';
import { PrimaryLoading } from "./LoadingComponents";
import { OnBoarding } from "./OnBoardingScreenComponent";
import { PrimaryButton } from "./PrimaryButton";
import { BottomActionSheet } from "./BottomActionSheet";
import { Header } from "./Header";
import { BackButton } from "./BackButton";
import { Divider, SocialLoginButton } from "./GetStartedScreenComponents";
import { UsernameInput, EmailInput, PasswordInput } from "./SignupComponents";
import { TextBox } from "./EmailVerificationScreenComponents";
import { EmailInput as LoginEmailInput, PasswordInput as LoginPasswordInput } from "./LoginScreenComponents";
import { EnterUsername, EnterCode, EnterNewPassword, Username } from "./ForgotPasswordScreenComponents";
import { BottomTabNavigator } from "./BottomTabNavigator";
import { HomeScreenHeader, SearchBar, MenuTypeScrollBar, RecipeCard } from "./HomeScreenComponents";
import { RecipeHomeCardSkeleton } from "./Skeletons";
import { SearchBox, SearchSuggestion } from "./SearchScreenComponents";
import { HeaderCarousel, RecipeInfoBox, RecipeAuthorBox, RecipeDescription, IngridientBox, StepContainer, NutrientsCard } from "./RecipeDetailsScreenComponents";
import { AuthorScreenHeader, AuthorBox, Tabs, AuthorRecipeCard, AuthorCookbookCard, AuthorAbout } from "./AuthorScreenComponents";
import { CookbookScreenHeader, Banner, CookbookRecipeCard } from "./CookbookScreenComponents";
import { OwnerScreenHeader, OwnerBox, OwnerScreenTabs, OwnerAbout } from './OwnerScreenComponents';
import { SubscriberCard } from './AuthorSubscribersScreenComponents';
import { ActivityScreenHeader, SubscriptionActivityCard, RatingActivityCard, RecipeLikeActivityCard, RecipeCommentActivity, CommentLikeActivity, CommentReplyActivity } from './ActivityScreenComponents';
import { SettingScreenHeader, SettingTab, LogoutModalContent } from './SettingsScreenComponents';
import { ChangePasswordScreenHeader, NewPasswordInput, OldPasswordInput } from './ChangePasswordScreenComponents';
import { AccountBox, AccountField, AccountLinks } from './AccountScreenComponents';
import { CategoryScreenHeader, Section, ExploreButton, VerticalSection } from './CategoryScreenComponents';


export {
    //
    CustomLoading,
    RetryBox,
    EmptyListMessageBox,
    ShareLoadingMask,

    // Loading Component
    PrimaryLoading,
    // 
    OnBoarding,
    
    PrimaryButton,
    
    Divider,
    SocialLoginButton,

    EmailInput,
    UsernameInput,
    PasswordInput,
    
    BottomActionSheet,

    Header,

    BackButton,

    // Email verification screen components
    TextBox,

    // Login screen component
    LoginEmailInput,
    LoginPasswordInput,

    //
    EnterUsername,
    EnterCode,
    EnterNewPassword,
    Username,

    /*//
    BottomTabNavigator,*/

    // Home Components
    HomeScreenHeader,
    SearchBar,
    MenuTypeScrollBar,
    RecipeCard,

    //
    SearchBox,
    SearchSuggestion,

    //
    RecipeHomeCardSkeleton,

    //
    HeaderCarousel,
    RecipeInfoBox,
    RecipeAuthorBox,
    RecipeDescription,
    IngridientBox,
    StepContainer,
    NutrientsCard,

    //
    AuthorScreenHeader,
    AuthorBox,
    Tabs,
    AuthorRecipeCard,
    AuthorCookbookCard,
    AuthorAbout,

    //
    CookbookScreenHeader,
    Banner,
    CookbookRecipeCard,

    //
    OwnerScreenHeader,
    OwnerBox,
    OwnerScreenTabs,
    OwnerAbout,

    //
    SubscriberCard,

    //
    ActivityScreenHeader,
    SubscriptionActivityCard,
    RatingActivityCard,
    RecipeLikeActivityCard,
    RecipeCommentActivity,
    CommentLikeActivity,
    CommentReplyActivity,

    //
    SettingScreenHeader,
    SettingTab,
    LogoutModalContent,

    //
    ChangePasswordScreenHeader,
    NewPasswordInput,
    OldPasswordInput,

    //
    AccountBox,
    AccountField,
    AccountLinks,

    //
    CategoryScreenHeader,
    Section,
    ExploreButton,
    VerticalSection,
};

